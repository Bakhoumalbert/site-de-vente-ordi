import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}) {
    
    return(
        <div className='cls-categories'>
            <select value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className='cls-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
            </select>
            <button onClick={() => setActiveCategory('')}>Reinitialiser</button>
        </div>
    )
}
export default Categories