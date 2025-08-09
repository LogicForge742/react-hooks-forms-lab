import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";  // import ItemForm component

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  // This callback receives newItem from ItemForm, adds it to the items state
  function handleItemFormSubmit(newItem) {
    setItems((items) => [...items, newItem]);
  }

  // Optional: filter items here based on searchInput before passing down
  // OR let ShoppingList handle filtering internally based on props passed
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />

      {/* Pass callback prop to ItemForm */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />

      {/* Pass searchInput and handler to Filter */}
      <Filter searchInput={search} onSearchChange={handleSearchChange} />

      {/* Pass filtered items (or all items) to ShoppingList */}
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;

