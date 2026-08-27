import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}) {
  return (
    <div
    className='w-full'>
        {label && <label
        className='inline-block mb-1 pl-1'
        > {label} </label>}
                                                                                                                                                 
        <Controller
        name={name || 'content'}
        control={control}
        render={({field:{onChange}}) => (
            <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            initialValue={defaultValue}
            onEditorChange={onChange}
       init={{
        branding:false,
        height:500,
        menubar:true,
        plugins:[
            'image',
            'code',
            'media',
            'fullscreen',
            'visualblocks',
            'insertdatetime',
            'anchor',
            'wordcount'
        ],
        toolbar:
        'undo redo | formatselect | bold | italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help '
    }}
    
    />
        )}
        />
    </div>

    
  )
}
