import styles from '../styles/TestimonialArea.module.scss';

const TestimonialArea = () => {
	return (
		<div className={styles.testimonial_area}>
			<h2 className={styles.h2}>
				See how others have benefited from our previous webinars!
			</h2>
			<div className={styles.testimonials}>
				<div className={styles.testimonial}>
					<div className={styles.img_border}>
						<img src='' alt='' className={styles.image} />
					</div>
					<h4 className={styles.h4}></h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						voluptatum explicabo maiores inventore error distinctio corrupti
						aspernatur ullam atque at.
					</p>
				</div>
				<div className={styles.testimonial}>
					<div className={styles.img_border}>
						<img src='' alt='' className={styles.image} />
					</div>
					<h4 className={styles.h4}></h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						voluptatum explicabo maiores inventore error distinctio corrupti
						aspernatur ullam atque at.
					</p>
				</div>
				<div className={styles.testimonial}>
					<div className={styles.img_border}>
						<img src='' alt='' className={styles.image} />
					</div>
					<h4 className={styles.h4}></h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						voluptatum explicabo maiores inventore error distinctio corrupti
						aspernatur ullam atque at.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialArea;
