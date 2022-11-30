import { classNames } from "utils/classNames";

export default function page() {
	return (
		<div className="flex flex-col items-center justify-center py-2">
			<main className="py-24 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
				<h1 className="text-6xl font-bold">
					Welcome to <span className="text-primary">Conduit!</span>
				</h1>
				<div className="container">
					<div className="max-w-xl mx-auto">
						<ul className="flex flex-col gap-4 my-12">
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-primary"
								)}
							>
								--primary
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-info"
								)}
							>
								--info
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-teal"
								)}
							>
								--teal
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-purple"
								)}
							>
								--purple
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-danger-100"
								)}
							>
								--danger-100
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-danger-200"
								)}
							>
								--danger-200
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-danger-300"
								)}
							>
								--danger-300
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"text-dark",
									"bg-light"
								)}
							>
								--light
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"text-skin-100",
									"bg-skin-light"
								)}
							>
								--skin-light
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-skin-100"
								)}
							>
								--skin-100
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"bg-skin-200"
								)}
							>
								--skin-200
							</li>
							<li
								className={classNames(
									"grid place-items-center text-center text-lg lowercase tracking-wide text-white h-16 rounded-lg border border-black/70",
									"text-light",
									"bg-dark"
								)}
							>
								--dark
							</li>
						</ul>
					</div>
				</div>

				<p className="mt-3 text-2xl">
					Get started by editing{" "}
					<code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
						app/**/*/.tsx
					</code>
				</p>
			</main>

			<footer className="flex h-24 w-full items-center justify-center border-t">
				<p>
					Powered by{" "}
					<strong className="text-danger-300">Conduit</strong>
				</p>
			</footer>
		</div>
	);
}
