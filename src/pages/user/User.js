import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import './user.css';

function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <button className='userAddButton'>Create</button>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img className='userShowImg' alt="" src="http://www.w3bai.com/w3css/img_avatar3.png"/>
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Becker</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className="userShowIcon"/>
                            <span className='userShowInfoTitle'>anabesk21</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className="userShowIcon"/>
                            <span className='userShowInfoTitle'>10.12.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className="userShowIcon"/>
                            <span className='userShowInfoTitle'>+453 342 2342</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className="userShowIcon"/>
                            <span className='userShowInfoTitle'>ana@mail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className="userShowIcon"/>
                            <span className='userShowInfoTitle'>new york usa</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type="text" placeholder="anabes21" className='userUpdateInput'/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type="text" placeholder="anabes21" className='userUpdateInput'/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type="text" placeholder="anabes21" className='userUpdateInput'/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type="text" placeholder="anabes21" className='userUpdateInput'/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type="text" placeholder="anabes21" className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                            <img
                                className="userUpdateImg"
                                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                            />
                            <label htmlFor='file'><Publish/></label>
                            <input type="file" id='file' style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
