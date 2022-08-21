function DropdownButton(props) {
    var title = props.title;
    var handleClick = props.onClick;
    return (
        <div className="dropdownButton">
            {title}
        </div>
    )
}


export { DropdownButton }

