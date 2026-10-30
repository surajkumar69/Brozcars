import os
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

def process_car_image(input_path, output_path, scale=0.90, contrast=1.15, saturation=1.05, top_darken_power=0.45):
    """
    Applies consistent luxury dark automotive studio grading:
    - Centers vehicle with guaranteed safety margins so bumpers are never cropped
    - Smoothly transitions perimeter into dark graphite / deep black (#09090b)
    - Applies cinematic lighting vignette and rich automotive contrast
    """
    im = Image.open(input_path).convert('RGB')
    w, h = 1376, 768
    im_orig = im.resize((w, h), Image.Resampling.LANCZOS)
    
    # 1. Scale car slightly to guarantee bumper-to-bumper breathing room
    new_w = int(w * scale)
    new_h = int(h * scale)
    scaled = im_orig.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Base dark studio canvas
    canvas = Image.new('RGB', (w, h), (9, 9, 11))
    pos_x = (w - new_w) // 2
    pos_y = (h - new_h) // 2
    
    # Alpha mask for feathering borders
    feather_x = int(new_w * 0.08)
    feather_y = int(new_h * 0.08)
    mask_arr = np.ones((new_h, new_w), dtype=np.float32)
    
    for i in range(feather_y):
        f = i / feather_y
        mask_arr[i, :] *= f
        mask_arr[new_h - 1 - i, :] *= f
        
    for j in range(feather_x):
        f = j / feather_x
        mask_arr[:, j] *= f
        mask_arr[:, new_w - 1 - j] *= f
        
    mask = Image.fromarray((mask_arr * 255).astype(np.uint8))
    canvas.paste(scaled, (pos_x, pos_y), mask)
    
    # 2. Studio Vignette (dark ceiling, darkened outer edges, illuminated center)
    y, x = np.ogrid[:h, :w]
    cy, cx = h * 0.52, w * 0.5
    norm_x = (x - cx) / (w * 0.5)
    norm_y = (y - cy) / (h * 0.5)
    dist = np.sqrt(norm_x**2 + (norm_y * 1.25)**2)
    
    vignette = np.clip(1.35 - 0.8 * dist, 0.08, 1.0)
    top_darken = np.clip(y / (h * top_darken_power), 0.1, 1.0)
    vignette = vignette * top_darken
    
    arr = np.array(canvas, dtype=np.float32)
    arr = arr * vignette[:, :, np.newaxis]
    
    # Subtle warm golden rim tone in mid-highlights (evoking Brozcars yellow/gold palette)
    # Target highlights/mid-tones (where car reflections occur)
    brightness = arr.mean(axis=2)
    highlight_mask = np.clip((brightness - 60) / 140, 0, 1)[:, :, np.newaxis]
    gold_tint = np.array([1.04, 1.02, 0.96], dtype=np.float32)  # subtle warm lift
    arr = arr * (1.0 + highlight_mask * (gold_tint - 1.0))
    
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    out = Image.fromarray(arr)
    
    # Contrast and Saturation
    enh = ImageEnhance.Contrast(out)
    out = enh.enhance(contrast)
    enh_col = ImageEnhance.Color(out)
    out = enh_col.enhance(saturation)
    
    out.save(output_path, quality=95)
    print(f"Processed: {os.path.basename(output_path)}")

def main():
    cars_dir = "public/images/cars"
    
    fleet_configs = {
        # Altroz, Baleno, i20 (new studio shots) - gentle framing & perimeter fade
        'tata-altroz.jpg': {'scale': 0.94, 'contrast': 1.08, 'saturation': 1.02, 'top_darken_power': 0.35},
        'maruti-baleno.jpg': {'scale': 0.94, 'contrast': 1.08, 'saturation': 1.02, 'top_darken_power': 0.35},
        'hyundai-i20.jpg': {'scale': 0.94, 'contrast': 1.08, 'saturation': 1.02, 'top_darken_power': 0.35},
        
        # Innova Crysta - generous 0.85 scale so long MPV body has ample breathing room, centered, zero crop
        'toyota-innova-crysta.jpg': {'scale': 0.85, 'contrast': 1.20, 'saturation': 1.05, 'top_darken_power': 0.50},
        
        # Thar 4x4
        'mahindra-thar.jpg': {'scale': 0.88, 'contrast': 1.15, 'saturation': 1.02, 'top_darken_power': 0.45},
        
        # Swift
        'maruti-swift.jpg': {'scale': 0.88, 'contrast': 1.15, 'saturation': 1.08, 'top_darken_power': 0.45},
        
        # Honda City
        'honda-city.jpg': {'scale': 0.86, 'contrast': 1.15, 'saturation': 1.02, 'top_darken_power': 0.45},
        
        # Venue
        'hyundai-venue.jpg': {'scale': 0.88, 'contrast': 1.15, 'saturation': 1.04, 'top_darken_power': 0.45},
        
        # Scorpio
        'mahindra-scorpio.jpg': {'scale': 0.86, 'contrast': 1.15, 'saturation': 1.02, 'top_darken_power': 0.45},
    }
    
    for filename, cfg in fleet_configs.items():
        src = os.path.join(cars_dir, filename)
        if os.path.exists(src):
            process_car_image(src, src, **cfg)
        else:
            print(f"Warning: {src} not found!")

if __name__ == '__main__':
    main()
