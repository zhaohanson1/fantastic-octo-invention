# Render workflow

1. Create a canvas and initialize.
2. Add objects to canvas

- Objects are draw with canvas context
- they should all share the same draw interface
  - with this structure, we can inherit and iterate through multiple objects to draw

3. Start real time render step

- clear old
- draw objects
- "schedule next steps"

4. Update objects

# Object workflow

- Listen to events to update properties
  - keyboard events
  - collision checks
  - environment updates
- "draw": final position
