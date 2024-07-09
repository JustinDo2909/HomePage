
import { Col, InputNumber, Row, Slider, Space } from "antd";
import Calculator from './Calculator';
import React, { useState } from "react";

const CalculatorService = () => {
    const shapes = ['Round', 'Cushion', 'Emerald', 'Oval', 'Princess', 'Pear', 'Radiant', 'Asscher', 'Marquise', 'Heart'];
    const colors = ['K', 'J', 'I', 'H', 'G', 'F', 'E', 'D'];
    const claritys = ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF', 'FL'];

    const [carat, setCarat] = useState(0.3);
    const onChange = (value) => {
        if (isNaN(value)) {
            return;
        }
        setCarat(value);
    };
    const [selectedShape, setSelectedShape] = useState('Round');
    const [selectedColor, setSelectedColor] = useState('K');
    const [selectedClarity, setSelectedClarity] = useState('SI2');
    const [valueCalculator, setValueCaculator] = useState(null);

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
        <div className="wrapperrr">

            <div className='home-page'>
                <div className="body-content-4">
                    <Row className="wrapper-content-calculator">
                        <Col className="wrapper-input" span={8}>
                            <h2>Calculator Input</h2>
                            <div className="wrapper-input-content">
                                <p>SHAPE</p>
                                <div className="input-col-2">
                                    {shapes.map((shape) => (
                                        <div className={selectedShape === shape ? 'selected' : ''} key={shape}>
                                            <button onClick={() => handleShapeSelected(shape)}>{shape}</button>
                                        </div>
                                    ))}
                                </div>
                                <p>CARAT</p>
                                <div className="input-col-3">
                                    <Space
                                        style={{
                                            width: '100%',
                                        }}
                                        direction="vertical"
                                    >
                                        <Row>
                                            <Col span={12}>
                                                <Slider
                                                    min={0.3}
                                                    max={5}
                                                    onChange={onChange}
                                                    value={typeof carat === 'number' ? carat : 0}
                                                    step={0.01}
                                                />
                                            </Col>
                                            <Col span={4}>
                                                <InputNumber
                                                    min={0.3}
                                                    max={5}
                                                    style={{
                                                        margin: '0 16px',
                                                    }}
                                                    step={0.01}
                                                    value={carat}
                                                    onChange={onChange}
                                                />
                                            </Col>
                                        </Row>
                                    </Space>
                                </div>
                                <p>COLOR</p>
                                <div className="input-col-4">
                                    {colors.map((color) => (
                                        <div className={selectedColor === color ? 'selected' : ''} key={color}>
                                            <button onClick={() => handleColorSelected(color)}>{color}</button>
                                        </div>
                                    ))}
                                </div>
                                <p>CLARITY</p>
                                <div className="input-col-5">
                                    {claritys.map((clarity) => (
                                        <div className={selectedClarity === clarity ? 'selected' : ''} key={clarity}>
                                            <button onClick={() => handleClaritySelected(clarity)}>{clarity}</button>
                                        </div>
                                    ))}
                                </div>
                                <div className="input-col-6">
                                    <button onClick={handleSubmit} >Submit</button>
                                </div>
                            </div>
                        </Col>
                        <Col className="wrapper-output" span={9}>
                            <h2>Calculator Output</h2>
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
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    )
}

export default CalculatorService