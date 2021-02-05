import styles from '../styles/TestimonialArea.module.scss';

const TestimonialArea = () => {
	return (
		<div className={styles.testimonial_area}>
			<h2 className={styles.h2}>
				See how others have benefited from our previous webinars
			</h2>
			<div className={styles.testimonials}>
				<div className={styles.testimonial}>
					<div className={styles.pic_area}>
						<div className={styles.pic_border}>
							<img src='/person1.jpg' alt='attendee' className={styles.pic} />
						</div>

						<a href='https://twitter.com' target='_blank'>
							@jane_luvs_doe
						</a>
					</div>
					<h4 className={styles.h4}></h4>
					<p>
						"The knowledge I gained while talking with them helped me earn
						enough passive income to finally quit my job!"
					</p>
				</div>
				<div className={styles.testimonial}>
					<div className={styles.pic_area}>
						<div className={styles.pic_border}>
							<img src='/person2.jpg' alt='attendee' className={styles.pic} />
						</div>

						<a href='https://twitter.com' target='_blank'>
							@mark_money
						</a>
					</div>
					<h4 className={styles.h4}></h4>
					<p>
						"@mark_money & @j_olivia - Thank you so much! This was easily the
						most useful webinar I've ever attended."
					</p>
				</div>
				<div className={styles.testimonial}>
					<div className={styles.pic_area}>
						<div className={styles.pic_border}>
							<img src='/person3.jpg' alt='attendee' className={styles.pic} />
						</div>

						<a href='https://twitter.com' target='_blank'>
							@shannon_hart
						</a>
					</div>
					<h4 className={styles.h4}></h4>
					<p className={styles.testimony_text}>
						"Well done with useful info and opportunities to ask questions. I'm
						so impressed with how helpful they were."
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialArea;
