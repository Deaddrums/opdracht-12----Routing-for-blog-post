import './Overview.css'
import data from '../../constants/data.json'
import {Link} from "react-router-dom";


function Overview() {

    return <>

        <div className="allBlogs">
            <div className="allBlogsContainer">
            {data.map(item =>
                <div key={item.id}>
                    <p>
                        <Link to={`/blog/${item.id}`}>
                            {item.title}
                        </Link>{" "}
                            ({item.author})
                            </p>
                            <p>
                        {item.comments + " reacties - " + item.shares + " keer gedeeld."}
                    </p>

                </div>
                )}
            </div>
        </div>

    </>

}

export default Overview