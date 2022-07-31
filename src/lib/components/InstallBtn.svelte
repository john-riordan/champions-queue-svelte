<script>
	let deferredPrompt;
	let showInstallPromotion = false;

	function installPrompt(e) {
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault();
		// Stash the event so it can be triggered later.
		deferredPrompt = e;
		// Update UI notify the user they can install the PWA
		showInstallPromotion = true;
		// Optionally, send analytics event that PWA install promo was shown.
		console.log(`'beforeinstallprompt' event was fired.`);
	}

	function appinstalled() {
		// Hide the app-provided install promotion
		// Clear the deferredPrompt so it can be garbage collected
		deferredPrompt = null;
		// Optionally, send analytics event to indicate successful install
		console.log('PWA was installed');
	}

	// async function installPWA() {
	// 	if (!deferredPrompt) return;
	// 	// Hide the app provided install promotion
	// 	// Show the install prompt
	// 	deferredPrompt.prompt();
	// 	// Wait for the user to respond to the prompt
	// 	const { outcome } = await deferredPrompt.userChoice;
	// 	gtag('event', 'pwa_install', { outcome: outcome });
	// 	// We've used the prompt, and can't use it again, throw it away
	// 	deferredPrompt = null;
	// }
</script>

<svelte:window on:beforeinstallprompt={installPrompt} on:appinstalled={appinstalled} />

{#if showInstallPromotion}
	<button class="install-btn" on:click={installPWA}>
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
			<path
				d="M38 24V38H10V24H6V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V24H38ZM26 25.34L31.18 20.18L34 23L24 33L14 23L16.82 20.18L22 25.34V6H26V25.34Z"
			/>
		</svg>
		Install App
	</button>
{/if}

<style lang="scss">
	.install-btn {
		color: var(--logo);
		background: hsla(var(--logo-hsl) / 0.15);
		border-color: var(--logo);
		opacity: 1;
		transition: background var(--transition), filter var(--transition);

		&:hover {
			background: hsla(var(--logo-hsl) / 0.2);
			filter: brightness(1.5);
		}
	}

	@media all and (display-mode: standalone) {
		.install-btn {
			display: none;
		}
	}
	@media all and (max-width: 1000px) {
		.install-btn {
			display: none;
		}
	}
</style>
