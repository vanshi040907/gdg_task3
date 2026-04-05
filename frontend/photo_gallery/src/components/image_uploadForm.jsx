import {useState} from 'react';

const Image_uploadForm = ()=>{

    const [formData, setFormData]= useState(
        {
            name: '',
            email: '',
            password: '',
        }
    );

    const [image, setImage]= useState(null);
    const [preview, setPreview]= useState(null);

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImagechange = (e)=>{
        const file= e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file))
    }
}