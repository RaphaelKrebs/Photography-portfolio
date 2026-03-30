# Images Folder Structure

Place your project folders here with the following structure:

```
/public/images/
├── 01 California - Colors of California/
│   ├── cover/
│   │   └── image.webp (or .jpg, .png)
│   └── project/
│       ├── 01.webp
│       ├── 02.webp
│       ├── 03.webp
│       └── ...
├── 02 Urban Shadows/
│   ├── cover/
│   │   └── cover.webp
│   └── project/
│       ├── img1.webp
│       ├── img2.webp
│       └── ...
└── ...
```

## Rules:

1. **Folder naming**: 
   - Use number prefix for ordering (e.g., "01 ", "02 ")
   - Number prefix will be removed from slug and title
   - Example: "01 California - Colors of California" → slug: "california-colors-of-california"

2. **Cover folder**: 
   - Must contain exactly 1 image
   - This image appears on the landing page
   - Supported formats: .webp, .jpg, .png

3. **Project folder**: 
   - Contains all images for the project detail page
   - Images will be sorted alphabetically
   - Supported formats: .webp, .jpg, .png

4. **Orientation**: 
   - Automatically detected from image dimensions
   - Portrait: height > width
   - Landscape: width > height

5. **Image formats**: 
   - Recommended: .webp for best performance
   - Also supported: .jpg, .png
