
import { Col, InputNumber, Row, Slider, Space } from "antd";
import Calculator from './Calculator';
import React, { useState } from "react";
import './calculator.scss';
import { red } from "@mui/material/colors";


const CalculatorService = () => {
    const shapes = ['Round', 'Cushion', 'Emerald', 'Oval', 'Princess', 'Pear', 'Radiant', 'Asscher', 'Marquise', 'Heart'];
    const colors = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D'];
    const claritys = ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL'];

    const [carat, setCarat] = useState(0.3);
    const [selectedShape, setSelectedShape] = useState('Round');
    const [selectedColor, setSelectedColor] = useState('K');
    const [selectedClarity, setSelectedClarity] = useState('SI2');
    const [valueCalculator, setValueCaculator] = useState({
        shape: selectedShape, color: selectedColor,
        clarity: selectedClarity, carat: carat
    });

    const onChange = (value) => {
        if (isNaN(value)) {
            return;
        }
        setCarat(value);
    };

    const handleSubmit = () => {
        setValueCaculator({
            shape: selectedShape,
            color: selectedColor,
            clarity: selectedClarity,
            carat: carat
        });
    };

    const handleShapeSelected = (shape) => {
        setSelectedShape(shape);
    };

    const handleColorSelected = (color) => {
        setSelectedColor(color);
    };

    const handleClaritySelected = (clarity) => {
        setSelectedClarity(clarity);
    };
    return (
        <div className="calculator-wrapper">
            <div className="wrapper-input">
                <div className="wrapper-input-content">
                    <div className="shape">
                        <p>SHAPE</p>
                        <div className="input-content">
                            {shapes.map((shape) => (
                                <div className={selectedShape === shape ? 'selected' : ''} key={shape}>
                                    <button onClick={() => handleShapeSelected(shape)}>{shape}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="carat">
                        <p>CARAT</p>
                        <div className="input-content">
                            <Space

                                style={{
                                    width: '100%',
                                }}
                                direction="vertical"
                            >
                                <div className="slider-input">
                                    <div>
                                        <Slider
                                            className="custom-slider"
                                            min={0.3}
                                            max={5}
                                            onChange={onChange}
                                            value={typeof carat === 'number' ? carat : 0}
                                            step={0.01}
                                        />
                                    </div>
                                    <div>
                                        <InputNumber
                                            min={0.3}
                                            max={5}
                                            step={0.01}
                                            value={carat}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </Space>
                        </div>
                    </div>
                    <div className="color">
                        <p>COLOR</p>
                        <div className="input-content">
                            {colors.map((color) => (
                                <div className={selectedColor === color ? 'selected' : ''} key={color}>
                                    <button onClick={() => handleColorSelected(color)}>{color}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="clarity">
                        <p>CLARITY</p>
                        <div className="input-content">
                            {claritys.map((clarity) => (
                                <div className={selectedClarity === clarity ? 'selected' : ''} key={clarity}>
                                    <button onClick={() => handleClaritySelected(clarity)}>{clarity}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="submit" onClick={handleSubmit} >Submit</button>
                </div>
            </div>
            <div className="wrapper-output">
                <div className="wrapper-output-content">
                    {valueCalculator && (
                        <Calculator
                            shape={valueCalculator.shape}
                            carat={valueCalculator.carat}
                            color={valueCalculator.color}
                            clarity={valueCalculator.clarity}
                        />
                    )}
                </div>
            </div>

        </div>

    )
}

/*
rgb(255, 255, 255)
rgb(255, 254, 249)
rgb(255, 253, 243)
rgb(255, 251, 237)
rgb(255, 250, 231)
rgb(255, 249, 225) 
*/

export default CalculatorService