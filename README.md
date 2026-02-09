# Design and Performance Decisions

## 🚀 Performance Optimization

### 1. List Virtualization (React Virtuoso)
We used **React Virtuoso** to handle potential large datasets efficiently.

* **Problem:** Standard rendering creates a DOM node for every single item, which degrades performance and increases memory usage as the list grows.
* **Solution:** Virtuoso implements "Windowing," rendering only the items currently visible in the viewport. This keeps the DOM lightweight and ensures a smooth 60 FPS scrolling experience regardless of the total number of items.

### 2. Stable Function Identities (`useCallback`)
The `handleComplete` function is wrapped in a `useCallback` hook.

* **Reasoning:** In React, functions are re-created on every render. By using `useCallback`, we maintain the same function instance across re-renders. This is crucial when passing callbacks to memoized child components to prevent them from breaking their memoization.

### 3. Component Memoization (`React.memo`)
The `TodoItem` component is designed to be wrapped in `React.memo`.

* **Reasoning:** Combined with `useCallback`, this ensures that only the specific item being updated (e.g., toggling completion) re-renders. The rest of the items in the virtualized list remain untouched, saving significant CPU cycles.