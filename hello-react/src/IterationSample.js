import React, { useState } from 'react';

const IterationSample = () => {
  const [fruits, setFruits] = useState([
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
    { id: 4, text: 4 },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextFruits = fruits.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setFruits(nextFruits);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(nextFruits); //fruits값을 업데이트
  };

  const fruitsList = fruits.map((fruit) => (
    <li key={fruit.id} onDoubleClick={() => onRemove(fruit.id)}>
      {fruit.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{fruitsList}</ul>
    </>
  );
};

export default IterationSample;
