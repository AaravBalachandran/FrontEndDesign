import React from "react";
import { FaRegStar } from "react-icons/fa";
import SelectComponent from "./SelectComponent";

export default function Whitebox() {
    return (
        <div style={{}}>
            <div style={{ display: "flex", marginTop: "10px", marginLeft: "15%" }}>
                {(() => {
                    const items = [];
                    for (let i = 0; i < 5; i++) {
                        items.push(<FaRegStar size={20} fill='black' fillOpacity={1} />);
                    }
                    return items;
                })()}
                <div style={{ fontSize: 18, marginLeft: "10px", fontFamily: '"Apercu", sans-serif' }}>
                    1573 Reviews
                </div>
            </div>
            <div style={{ backgroundColor: "white", border: "1px solid black", marginTop: "5%" }}>
                <p style={{ fontSize: "40%", fontWeight: "200" }}>Quantity</p>
                <div style={{ display: "flex"}}>
                    <SelectComponent />
                    <SelectComponent />
                    <SelectComponent />
                    <SelectComponent />
                </div>
            </div>
        </div>
    );
}