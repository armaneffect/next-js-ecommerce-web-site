

type ServicesLayoutProps = {
    children: React.ReactNode;
};

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
    return (
        <div>
            <h1>Our Services</h1>
            {children}
        </div>
    );
};

export default ServicesLayout;