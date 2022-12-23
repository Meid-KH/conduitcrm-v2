"use client";
import React, { FC, FormEvent } from "react";
import { HiOutlineCalendar, HiArrowRight } from "react-icons/hi";
import { Title } from "components/ui";
import { WaveSm } from "components/Waves";
import { classNames } from "utils/classNames";
import Arrow from "./Arrow";

interface FormControlProps {
	step: number;
	label: string;
	description?: string;
	type: "text" | "tel" | "email" | "textarea";
	placeholder: string;
	required?: boolean;
	className?: string;
	isActive?: boolean;
	onchange?: () => void;
	onfocus?: () => void;
	onblur?: () => void;
}

const page = () => {
	return (
		<>
			<Intro />
			<ContactForm />
		</>
	);
};

const Intro = () => (
	<section className="relative py-48">
		<WaveSm className="max-w-full absolute inset-y-0 left-0 opacity-70" />
		<div className="relative container">
			<Title as="h1" color="red" size="7xl">
				We love to hear from you,
				<br />
				Get in touch <span className="text-primary">👋</span>
			</Title>
			<div className="grid place-items-center gap-8 xl:gap-16 pt-28">
				<a
					className={classNames(
						"rounded-2xl bg-black/40 py-5 px-8 text-xl font-medium tracking-wide",
						"flex gap-4 items-center",
						"hover:bg-black"
					)}
					href="#"
					target="_blank"
					rel="noopener, noreferrer"
				>
					<HiOutlineCalendar />
					Schedule a meeting
					<HiArrowRight />
				</a>
				<span className="flex gap-3.5 font-medium tracking-wide">
					..or fill in form below
					<span className="translate-y-3.5">
						<Arrow />
					</span>
				</span>
			</div>
		</div>
	</section>
);

const ContactForm = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		const data = new FormData();
		e.preventDefault();
		console.log("Submiting data...");
		console.log(data);
	};
	return (
		<section className="relative pb-32">
			<div className="container">
				<div className="mx-auto max-w-2xl">
					<form
						action="?"
						className={classNames("flex flex-col gap-24")}
						onSubmit={(e) => handleSubmit(e)}
					>
						<FormGroup
							step={1}
							label="What is your name?"
							description=" We would like to connect you with the right expert on Conduit"
							type="text"
							required={true}
							placeholder="Type your name here"
							onchange={() => console.log("change !")}
							isActive={true}
						/>
						<FormGroup
							step={2}
							label="What is your Work Email?"
							// description=" We would like to connect you with the right expert on Conduit"
							type="email"
							required={true}
							placeholder="Type your email address here"
							onchange={() => console.log("change !")}
							isActive={false}
						/>
						<FormGroup
							step={3}
							label="What is a phone number we can reach you at?"
							// description=" We would like to connect you with the right expert on Conduit"
							type="tel"
							required={true}
							placeholder="555 123 4567"
							onchange={() => console.log("change !")}
							isActive={false}
						/>
						<FormGroup
							step={4}
							label="Is there something else you want to share with us?"
							description="Let us know about your company and the type of work you do."
							type="textarea"
							required={false}
							placeholder="Type here your answer..."
							onchange={() => console.log("change !")}
							isActive={false}
						/>

						<div className="mt-12">
							<button
								type="submit"
								className={classNames(
									"text-lg tracking-wide font-medium px-20 py-5",
									"bg-primary border border-primary",
									"hover:bg-skin-200 hover:border-skin-light"
								)}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

const FormGroup: FC<FormControlProps> = ({
	step,
	label,
	description,
	type,
	placeholder,
	required,
	className,
	onchange,
	isActive,
}) => {
	const [active, setActive] = React.useState(isActive || false);

	const handleFocus = () => setActive(true);

	const handleBlur = (
		event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
	) => {
		const { value } = event.target;
		value !== "" ? setActive(true) : setActive(false);
	};

	return (
		<div
			className={classNames(
				"flex items-start gap-3.5",
				!active && "opacity-40"
			)}
		>
			<span className="font-medium text-lg leading-none py-2 flex items-end gap-1 flex-shrink-0">
				{step} <HiArrowRight className="w-4 h-4" />
			</span>
			<div className="flex-1">
				<label className="flex flex-col gap-2">
					<span className="text-3xl font-medium tracking-wide leading-normal">
						{label}
						{required && (
							<sup className="ml-2 text-3xl text-[#CC23F6] -top-[0.2em]">
								*
							</sup>
						)}
					</span>
					<small className="text-lg">{description}</small>
				</label>
				{type === "textarea" ? (
					<textarea
						className={classNames(
							"form-input pt-10",
							active && "border-info",
							className
						)}
						placeholder={placeholder}
						onChange={onchange}
						onFocus={() => handleFocus()}
						onBlur={(event) => handleBlur(event)}
						rows={6}
						required={required}
					></textarea>
				) : (
					<input
						className={classNames(
							"form-input pt-10",
							active && "border-info",
							className
						)}
						type={type}
						placeholder={placeholder}
						onChange={onchange}
						onFocus={() => handleFocus()}
						onBlur={(event) => handleBlur(event)}
						required={required}
					/>
				)}
			</div>
		</div>
	);
};

export default page;
