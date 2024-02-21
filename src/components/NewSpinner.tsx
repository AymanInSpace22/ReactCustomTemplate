import '../styles/NewSpinner.css';

function NewSpinner() {
    return (
        <>
            <div className="ui-abstergo">
                <div className="abstergo-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="ui-text">
                    Imagining
                    <div className="ui-dot"></div>
                    <div className="ui-dot"></div>
                    <div className="ui-dot"></div>
                </div>
            </div>

        </>
    );
}

export default NewSpinner;