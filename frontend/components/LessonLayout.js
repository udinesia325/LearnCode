export default function LessonLayout(props){
		return (
        <>
            <input
                type="text"
                name="search_app"
                placeholder="Search ..."
                className="search_app"
            />
            <div className="items_area">
                {props.children}
            </div>
        </>
		)
}
