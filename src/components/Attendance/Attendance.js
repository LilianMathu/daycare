import React from 'react';

function Attendance(props) {
    return (
        <div className="container">
            <div className="row col-md-10 col-md-offset-2 custyle">
                <table className="table table-striped custab">
                    <thead>
                        <a href="/" className="btn btn-primary btn-xs pull-right"><b>+</b> Add new Children</a>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Attendance status</th>
                            <th className="text-center">Check in/out</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td className="text-center">
                            <a className='btn btn-info btn-xs' href="/"><span className="glyphicon glyphicon-edit"></span> Check-in </a>
                            <a href="/" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Check-out</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Products</td>
                        <td>Main Products</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a> <a href="/" className="btn btn-danger btn-xs">
                                <span className="glyphicon glyphicon-remove"></span> Check-out</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Blogs</td>
                        <td>Parent Blogs</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a>
                            <a href="/" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Check-out</a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/"><span className="glyphicon glyphicon-edit">
                        </span> Check-in</a> <a href="/" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove">
                        </span> Check-out</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a> <a href="/" className="btn btn-danger btn-xs">
                                <span className="glyphicon glyphicon-remove"></span> Check-out</a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a> <a href="/" className="btn btn-danger btn-xs">
                                <span className="glyphicon glyphicon-remove"></span> Check-out</a></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Products</td>
                        <td>Main Products</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a> <a href="/" className="btn btn-danger btn-xs">
                                <span className="glyphicon glyphicon-remove"></span> Check-out</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Blogs</td>
                        <td>Parent Blogs</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a>
                            <a href="/" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Check-out</a>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/"><span className="glyphicon glyphicon-edit">
                        </span> Check-in</a> <a href="/" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove">
                        </span> Check-out</a></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>News</td>
                        <td>News Cate</td>
                        <td className="text-center"><a className='btn btn-info btn-xs' href="/">
                            <span className="glyphicon glyphicon-edit"></span> Check-in</a> <a href="/" className="btn btn-danger btn-xs">
                                <span className="glyphicon glyphicon-remove"></span> Check-out</a></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};



export default Attendance

