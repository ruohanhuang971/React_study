const Form = () => {
    return (
        <form className="add-form">
            <h3>What do you need for your trip? 🤔</h3>
            <select>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => (
                    <option key={index} value={index}>
                        {index}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="item..." />
            <button>Add</button>
        </form>
    );
};

export default Form;
