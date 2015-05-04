@extends('master')

@section('title')
India Quotient : Let's Talk
@endsection

@section('content')

@include('partials.header-sub')

<section class="container bottom-space--m">
	{{-- <div class="alert alert-success alert-visible">
		<span class="alert-market">
			<i class="fa fa-thumbs-up"></i>
		</span>
		<strong>Wohoo!</strong> You've successfully sent us the message. We'll get back to you soon. :)
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-times"></i></button>
	</div> --}}
	<div class="row">
		<div class="col-sm-6">
			<h3 class="heading-helper heading-helper--large heading-helper--left">Oh... Hi, Hello!</h3>
			<p class="p-space">We love to talk (not gossip). Because, well... that's how we've made our most successful investments. And on the flip side, knowing a person before he/she pitches always raises the probablity of us investing in him/her. Win-win!</p>
			<p class="p-space">So, let's talk!</p>

			<p class="p-space">You may use the form on this page either to strike up a conversation or pitch your startup in plain-text. (If you can successfully pitch your startup without a deck, you're an awesome founder. We like you!) :)</p>

			<div class="social social--soft">
				<!-- List with social icons -->
				<ul>
					<li class="social__item"><a class="social__link" href="https://twitter.com/IndiaQuotient" target="_blank"><i class="social__icon fa fa-twitter"></i></a></li>
					<li class="social__item"><a class="social__link" href="https://www.facebook.com/IndiaQuotient" target="_blank"><i class="social__icon fa fa-facebook"></i></a></li>
				</ul>
			</div>
		</div>

		<div class="col-sm-5 col-sm-offset-1">
			<div class="alert alert--simple alert-danger alert-visible">
				<strong>Oh snap!</strong> We require your name.
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-times"></i></button>
			</div>
			<form class="contact contact--clean contact--full" id="contact-form" name="contact-form" method="post" action="/contact">
				<h3 class="heading-helper heading-helper--large heading-helper--left">Drop us a line</h3>

				<input class="contact__field" name="contact-name" type="text" placeholder="full name" required>
				<input class="contact__field" name="contact-email" type="email" placeholder="email" required>
				<input class="contact__field" name="contact-phone" type="tel" placeholder="phone" required>
				<input class="contact__field" name="contact-subject" type="text" placeholder="subject" required>
				<textarea class="contact__field contact__area" name="contact-message" placeholder="message" required></textarea>
				<button class="btn btn--decorated btn-info btn-submit" type="submit"><i class="fa fa-paper-plane"></i> Send</button>
			</form>
		</div>
	</div><!-- end row -->
</section><!-- end container -->

@endsection