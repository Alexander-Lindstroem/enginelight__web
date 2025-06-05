## Tailwind variables

All custom tailwind variables for this project start with the prefix `el`, short for EngineLight.

Colors:
`elwood` - Darker green
`elgrass` - Lighter green
`elblack` - Near-black
`elsea` - Darker blue
`elrust` - Desaturated red
`elwhite` - Greyish white

Fonts:
`elmain` - Orbitron font

Text Size:
`elh1` - Top-level content tiles
`elh2` - Section headers
`elh3` - Subsection headers
`elh4` - Smaller headers or intro sections
`elbodyl` - Long-form content
`elbodym` - Paragraphs, UI descriptions (standard)
`elbodys` - Meta text, secondary info

## File strucuring

Some minor guidelines for how to organize files in this project.

### Images

Images all go into public, without any sub-directories. Just be careful to name things with dashes and so there aren't any confusion as to what file goes where.

### Data, functions, types

These all go into the different files found under src/utils and can then be imported to wherever they are needed.

### Text

If you need to use plain text, then use it as HTML rather than creating data files and importing those to other places. Unless, of course, the task at hand specifically calls for it.

## Next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).