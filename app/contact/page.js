
export default function ContactPage() {
    return (
        <>
            <section className="hero bg-dark">
                <div className="container container-sm">
                    <h2>
                        <span className="bg-primary">Enthusiastic</span> thinkers, creating unique endeavors powered by
                        <span className="bg-primary">creativity </span>
                    </h2>
                </div>
            </section>
            <section className="contact">
                <div className="container container-sm">
                    <h2 className="section-heading">Contact Us</h2>
                    <p>Have a question? Leave your information below, and we will get back to you as soon as possible.</p>

                    <form name="contact" method="POST" data-netlify="true">
                        {/* This hidden input is necessary for Netlify forms to work */}
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-group">
                            <label htmlFor="firstname" className="visually-hidden">First Name</label>
                            <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="visually-hidden">Last Name</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="visually-hidden">Message</label>
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
