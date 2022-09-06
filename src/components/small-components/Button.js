export default function Button({ btnText }) {
    return (
        <div>
            <button className="bg-gray-900 shadow-2xl p-3 font-bold rounded transition hover:bg-sky-700">{btnText}</button>
        </div>
    )
}