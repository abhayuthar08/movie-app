import React from 'react'
import map from 'map'

const DropDown = ({title,options, func}) => {
  return (
    <div className='select mt-2v mb-3'>

            <select defaultValue="0" onChange={func} name="format" id="format">
                <option value="0" disabled>
                    {title}
                </option >
                {options.map((o,i) => (
                    <option key={i} value={o} >
                        {o.toUpperCase()}
                    </option>
                )) }
            </select>

        </div>
  )
}

export default DropDown