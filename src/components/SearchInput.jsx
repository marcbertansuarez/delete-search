const SearchInput = ({handleSearch}) => {

    const handleSearchValue = (e) => {
        handleSearch(e.target.value);
    }

    return <input type="text" name="search" onChange={handleSearchValue}/>
}

export default SearchInput;