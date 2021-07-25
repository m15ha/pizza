function Footer() {
    return (
        <footer className='page-footer green lighten-2 '>
            <div className='footer-copyright'>
                <div className='container center-align'>
                © {new Date().getFullYear()} Copyright | Powered by m15                    
                </div>
            </div>
        </footer>
    );
}

export { Footer };
