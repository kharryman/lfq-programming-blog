import { useState, useRef, useEffect } from 'react';
import { DropdownButton } from './DropdownButton.js';
import { formatName } from '../helpers';
import { createArrayTypeNode } from 'typescript';

function Dropdown(props) {
    console.log("props.children = " + props.children);
    const [display, setDisplay] = useState('none')
    let selectedButtonStyle = styles.selectedStyle;

    function handleClick() {
        console.log("handleClick called");
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
        selectedButtonStyle = display === 'none' ? styles.notSelectedStyle : styles.selectedStyle;
    }

    function closeDropdown() {
        console.log("closeDropdown called");
        display = 'none';
    }
    function openDropdown() {
        console.log("openDropdown called");
        display = 'block';
    }

    let children = props.children;

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    //alert("You clicked outside of me!");
                    setDisplay('none')
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);


    return (
        <div className={"navbarDropdown"} ref={wrapperRef}>
            <div className='dropdownTitleWrapper' style={display!='none'? styles.dropdownSelected:null} onClick={handleClick}>
                <div className={props.title.length <= 12 ? "dropdownTitle" : "dropdownTitleSmall"}>
                    {props.title}
                </div>
                {display != 'none' ? <div style={styles.dropSymb}>&#x25B2;</div> : <div style={styles.dropSymb}>&#x25BC;</div>}
            </div>
            <div style={{ display: display, position: 'absolute', tabIndex: 1 }} onFocus={openDropdown} onBlur={closeDropdown}>
                {children.map((child) => {
                    return (
                        <div key={child} onClick={() => { props.onSelectDropdown(child) }}>
                            <DropdownButton key={child} title={child}></DropdownButton>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

const styles = {
    dropdownSelected: {
      backgroundColor: 'rgb(98, 174, 174)'
    },
    dropSymb: {
        color: 'rgb(92, 164, 164)',
        display: 'inline-block',
        float: 'right',
    },
    notSelectedStyle: {
        width: '100px',
        height: '25px',
        border: '1px solid black',
        backgroundColor: 'rgb(230, 245, 245)',
        borderRadius: '2px',
        textAlign: 'center',
    },
    selectedStyle: {
        width: '100px',
        height: '25px',
        border: '1px solid black',
        backgroundColor: 'rgb(210, 225, 225)',
        borderRadius: '2px',
        textAlign: 'center',
    }
}

export { Dropdown }