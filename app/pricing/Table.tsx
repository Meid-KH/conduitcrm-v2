import React, { FC } from "react";
import { FiCheck } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import { classNames } from "utils/classNames";

const Table = () => {
	return (
		<section className="relative pb-12">
			<div className="container">
				<div className="overflow-x-auto pt-12 ">
					<table className="w-full">
						<thead>
							<tr>
								<th></th>
								<th>
									<div className="flex flex-col items-center gap-6">
										<span className="font-medium text-xl">
											Individual
										</span>
										<div className="font-light flex gap-2 justify-center items-end">
											<small className="text-2xl">
												$
											</small>
											<span className="text-6xl">0</span>
										</div>
										<p className="text-sm tracking-wide leading-relaxed">
											For professionals looking to dive in
											into Conduit's Lead Processing
											platform.
										</p>
										<a
											className={classNames(
												"inline-block px-6 py-3 text-base tracking-wide",
												"bg-primary border border-primary hover:bg-skin-200 hover:border-skin-light",
												"mt-4"
											)}
											href="google.com"
											target="_blank"
											rel="noopener, noreferrer"
										>
											Register
										</a>
									</div>
								</th>

								<th>
									<div className="flex flex-col items-center gap-6">
										<span className="font-medium text-xl">
											Basic
										</span>
										<div className="font-light flex gap-2 justify-center items-end">
											<small className="text-2xl">
												$
											</small>
											<span className="text-6xl">11</span>
											<span className="text-xl text-left opacity-60">
												user / <br /> month
											</span>
										</div>
										<p className="text-sm tracking-wide leading-relaxed">
											For professionals looking to dive in
											into Conduit's Lead Processing
											platform.
										</p>
										<a
											className={classNames(
												"inline-block px-6 py-3 text-base tracking-wide",
												"bg-primary border border-primary hover:bg-skin-200 hover:border-skin-light",
												"mt-4"
											)}
											href="google.com"
											target="_blank"
											rel="noopener, noreferrer"
										>
											Try for free
										</a>
									</div>
								</th>

								<th>
									<div className="relative flex flex-col items-center gap-6">
										<Tooltip>Most popular</Tooltip>
										<span className="font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#A320E1] to-[#297FFF]">
											Standard
										</span>
										<div className="font-light flex gap-2 justify-center items-end">
											<small className="text-2xl">
												$
											</small>
											<span className="text-6xl">29</span>
											<span className="text-xl text-left opacity-60">
												user / <br /> month
											</span>
										</div>
										<p className="text-sm tracking-wide leading-relaxed">
											For professionals looking to dive in
											into Conduit's Lead Processing
											platform.
										</p>
										<a
											className={classNames(
												"inline-block px-6 py-3 text-base tracking-wide",
												"bg-primary border border-primary hover:bg-skin-200 hover:border-skin-light",
												"mt-4"
											)}
											href="google.com"
											target="_blank"
											rel="noopener, noreferrer"
										>
											Try for free
										</a>
									</div>
								</th>

								<th>
									<div className="flex flex-col items-center gap-6">
										<span className="font-medium text-xl">
											Pro
										</span>
										<div className="font-light flex gap-2 justify-center items-end">
											<small className="text-2xl">
												$
											</small>
											<span className="text-6xl">39</span>
											<span className="text-xl text-left opacity-60">
												user / <br /> month
											</span>
										</div>
										<p className="text-sm tracking-wide leading-relaxed">
											For professionals looking to dive in
											into Conduit's Lead Processing
											platform.
										</p>
										<a
											className={classNames(
												"inline-block px-6 py-3 text-base tracking-wide",
												"bg-primary border border-primary hover:bg-skin-200 hover:border-skin-light",
												"mt-4"
											)}
											href="google.com"
											target="_blank"
											rel="noopener, noreferrer"
										>
											Try for free
										</a>
									</div>
								</th>

								<th>
									<div className="flex flex-col items-center gap-6">
										<span className="font-medium text-xl">
											Enterprise
										</span>
										<div className="font-light flex gap-2 justify-center items-end">
											<span className="text-6xl">-</span>
										</div>
										<p className="text-sm tracking-wide leading-relaxed">
											For professionals looking to dive in
											into Conduit's Lead Processing
											platform.
										</p>
										<a
											className={classNames(
												"inline-block px-6 py-3 text-base tracking-wide",
												"bg-primary border border-primary hover:bg-skin-200 hover:border-skin-light",
												"mt-4"
											)}
											href="google.com"
											target="_blank"
											rel="noopener, noreferrer"
										>
											Contact us
										</a>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Contacts</td>
								<td>500</td>
								<td>2,500</td>
								<td>5,000</td>
								<td>Unlimitted</td>
								<td>Unlimitted</td>
							</tr>

							<tr>
								<td>Tasks</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
							</tr>

							<tr>
								<td>Feature</td>
								<td>
									<VscClose className="mx-auto w-9 h-9 opacity-40" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
							</tr>

							<tr>
								<td>Feature</td>
								<td>
									<VscClose className="mx-auto w-9 h-9 opacity-40" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
							</tr>

							<tr>
								<td>Feature</td>
								<td>
									<VscClose className="mx-auto w-9 h-9 opacity-40" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
								<td>
									<FiCheck className="mx-auto w-9 h-9" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

const Tooltip: FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => (
	<span
		className={classNames(
			"absolute bottom-full min-w-[160px] bg-skin-200 text-center px-6 py-3 rounded-xl",
			"-translate-y-1/2",
			"after:content-[''] after:w-6 after:h-6 after:bg-skin-200 after:rounded",
			"after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-[calc(50%+0.25rem)] after:rotate-45",
			className
		)}
	>
		{children}
	</span>
);

export default Table;
