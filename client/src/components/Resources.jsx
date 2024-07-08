import React from 'react';

const Resources = () => {
    return (
        <div className="resources">
            <div className="section">
                <h1>Resources</h1>

                {/* Blog Articles */}
                <section>
                    <h2>Blog Articles</h2>
                    <div className="resource-list">
                        <div className="resource-item">
                            <h3>Article Title 1</h3>
                            <p>Summary of the article. This is a brief description to give an overview of the content.</p>
                            <a href="/path-to-article-1">Read More</a>
                        </div>
                        <div className="resource-item">
                            <h3>Article Title 2</h3>
                            <p>Summary of the article. This is a brief description to give an overview of the content.</p>
                            <a href="/path-to-article-2">Read More</a>
                        </div>
                        {/* Add more blog articles as needed */}
                    </div>
                </section>

                {/* Whitepapers */}
                <section>
                    <h2>Whitepapers</h2>
                    <div className="resource-list">
                        <div className="resource-item">
                            <h3>Whitepaper Title 1</h3>
                            <p>Summary of the whitepaper. This is a brief description to give an overview of the content.</p>
                            <a href="/path-to-whitepaper-1">Download</a>
                        </div>
                        <div className="resource-item">
                            <h3>Whitepaper Title 2</h3>
                            <p>Summary of the whitepaper. This is a brief description to give an overview of the content.</p>
                            <a href="/path-to-whitepaper-2">Download</a>
                        </div>
                        {/* Add more whitepapers as needed */}
                    </div>
                </section>

                {/*  Client Reviews */}
                <section>
                    <h2>Client Reviews</h2>
                    <div className="resource-list">
                        <div className="resource-item">
                            <h3>Review Title 1</h3>
                            <p>Summary of the client review. This is a brief description to give an overview of the content.</p>
                            <a href="/path-to-client-review-1">Read More</a>
                        </div>
                        <div className="resource-item">
                            <h3>Review Title 2</h3>
                            <p>Summary of the client review. This is a brief description to give an overview of the content.</p>
                            <a href="/path-to-client-review-2">Read More</a>
                        </div>
                        {/* Add more case studies as needed */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resources;
