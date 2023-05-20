
type FormCardProps = {
    children: React.ReactNode;
}

const FormCard = ({ children }: FormCardProps) => {
    return (
        <>
            <div className=' bg-white px-10 py-5 rounded-md' data-aos="fade-down">
                <h1 className='text-3xl text-center mb-3'>Form Fill-Up</h1>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default FormCard
