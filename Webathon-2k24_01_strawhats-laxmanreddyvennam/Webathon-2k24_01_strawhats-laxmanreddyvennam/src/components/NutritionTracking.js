import React, { useState } from 'react';
import './NutritionTracking.css';
function NutritionTracking() {
  const [foodItems, setFoodItems] = useState([]);
  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoodItems([...foodItems, newFood]);
    setNewFood({
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    });
  };

  return (
    <div className='container'>
      <h1>Nutritional Tracking</h1>
      <form  id='form' onSubmit={handleSubmit}>
        <input type="text" name="name"  placeholder='food'className='form-control mb-3 d-flex 'value={newFood.name} required onChange={handleChange} />
        <label>Calories:</label>
        <input type="number" name="calories"  className='form-control mb-3' value={newFood.calories} required onChange={handleChange} />
        <label>Protein (g):</label>
        <input type="number" name="protein" className='form-control mb-3' value={newFood.protein} required onChange={handleChange} />
        <label>Carbs (g):</label>
        <input type="number" name="carbs" className='form-control mb-3' value={newFood.carbs} required onChange={handleChange} />
        <label>Fat (g):</label>
        <input type="number" name="fat" className='form-control mb-3' value={newFood.fat} required onChange={handleChange} />
        <button type="submit">Add Food</button>
      </form>
      <h2>Food Log</h2>
      <h3>Chicken Breast (3 oz cooked): 31g protein, 3.5g fat, 0g carbs, 165 calories</h3>
      <h3>Salmon (3 oz cooked): 22g protein, 6g fat, 0g carbs, 184 calories</h3>
      <h3>Lentils (1 cup cooked): 18g protein, 1.5g fat, 40g carbs, 230 calories</h3>
      <h3>Avocado (1/2) : 2g protein, 10g fat, 7g carbs, 160 calories</h3>
      <ul>
        {foodItems.map((food, index) => (
          <li key={index}>
           <h3> {food.name} - Calories: {food.calories}, Protein: {food.protein}g, Carbs: {food.carbs}g, Fat: {food.fat}g</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionTracking;