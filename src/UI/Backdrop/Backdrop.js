function Backdrop(props) {
    return (
        <div style={{
            position: 'fixed',
            opacity: '0.3',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
            zIndex: '100',
            top: 0,
            left: 0
        }}
        onClick={() => props.clicked(false)}
        >
            
        </div>
    );
}

export default Backdrop;