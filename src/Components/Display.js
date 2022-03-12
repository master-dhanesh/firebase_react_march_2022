import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Display = () => {
    const { blogs, errors, loading } = useSelector(state => state.blogs);


    useEffect(() => {
        if (errors) {
            console.log(errors);
            alert('Something Went Wrong')
        }
    }, [errors])




    return loading ? 'Loading...' : (
        <div className="list-group mt-5 container">
            {
                blogs.map((b, i) => {
                    return (
                        <a key={i} href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{b.title}</h5>
                                <small><i class="ri-delete-bin-2-fill"></i></small>
                            </div>
                            <p className="mb-1">{b.subtitle}</p>
                            <small>{b.shortDescription}</small>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Display