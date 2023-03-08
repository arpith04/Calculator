import './Display.css';

export default function Display(props) {
    return (
        <div>
            <form>
                <input type="text" value={props.onValue} />
            </form>
        </div>
    );
}