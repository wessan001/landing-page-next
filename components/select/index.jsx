import Styles from "./select.module.scss"

const Select = ({type,placeholder,options}) => {
    return (
        <select 
        type={type} 
        className={Styles.select}
        > 
                    <option value="">{placeholder}</option>
                    {
                        options?.map((option,index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
    )
}

export default Select