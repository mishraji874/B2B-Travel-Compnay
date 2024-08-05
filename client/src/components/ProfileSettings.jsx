import React, { useState } from 'react';


const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        companyName: '',
        companyGSTNumber: '',
        companyEmail: '',
        companyPhone: '',
        companyAddress: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save profile settings logic here
        console.log('Profile updated:', profile);
    };

    return (
        <div className="profile-settings">
            <h1>Profile Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Company Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Company GST Number</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.companyGSTNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Company Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.companyEmail}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Company Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.companyPhone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Company Address</label>
                    <input
                        type="text"
                        name="address"
                        value={profile.companyAddress}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default ProfileSettings;
