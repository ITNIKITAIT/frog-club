const Container = ({ children }) => {
    return (
        <div className="mx-auto max-w-[1920px] w-full px-[10px] sm:px-[30px] md:px-[60px] xl:px-[72px]">
            {children}
        </div>
    );
};

export default Container;
