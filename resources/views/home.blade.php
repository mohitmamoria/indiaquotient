@extends('master')

@section('title')
India Quotient : Home
@endsection

@section('content')

@include('partials.header-main')

<section class="container">

	<div class="text-plus bottom-space--m">
		<h3 class="text-plus__heading">You're out there, somewhere, hustling...</h3>
		<p class="text-plus__info">...we'll find you and fund you!</p>
	</div>

	<div class="row">
		<div class="col-sm-4">
			<div class="feature">
				<div class="feature__image">
					<img src="images/icon-coin.png" alt="What We Do?" class="img-thumbnail">
				</div>
				<h3 class="feature__heading">What We Do?</h3>
				<p class="feature__info">We have been in business for a few years now. Basically funding companies that not too many seem to like. We don't care if it looks ugly, as long as it promises to grow like weed.</p>
				<a class="btn btn-danger btn--decorated btn-sm" href="/what">More <i class="fa fa-angle-double-right"></i></a>
			</div>
		</div><!-- end col -->

		<div class="col-sm-4">
			<div class="feature">
				<div class="feature__image">
					<img src="images/icon-joker.png" alt="Who Are We?" class="img-thumbnail">
				</div>
				<h3 class="feature__heading">Who Are We?</h3>
				<p class="feature__info">We know a bit about VC funds - raised money, managed and even invested in them. We are a bunch of people who travel, meet, talk to and invest in <strong>ginger startups</strong>, at early stage.</p>
				<a class="btn btn-danger btn--decorated btn-sm" href="/we">More <i class="fa fa-angle-double-right"></i></a>
			</div>
		</div><!-- end col -->


		<div class="col-sm-4">
			<div class="feature">
				<div class="feature__image">
					<img src="images/icon-bulb.png" alt="Who Are You?" class="img-thumbnail">
				</div>
				<h3 class="feature__heading">Who Are You?</h3>
				<p class="feature__info">Chances are high that you're someone who cannot take mediocrity any more. You loved your job (great coffee, free internet) but broke out of that routine. You're hungry and hustling.</p>
				<a class="btn btn-danger btn--decorated btn-sm" href="/you">More <i class="fa fa-angle-double-right"></i></a>
			</div>
		</div><!-- end col -->
	</div><!-- end row -->
</section><!-- end container -->


<div class="container">
	<div class="devider-brand bottom-space--m"></div>
</div>

<section class="container">
	<h2 class="block-title block-title--top-larger" id="portfolio">Current Portfolio</h2>
</section>

<div class="full-carousel carousel-present-sm">
	<div class="container carousel-sides--info">
		<div class="swiper-container carousel-sides ">
			<div class="swiper-wrapper" style="width: 2880px; height: 255px; transform: translate3d(-960px, 0px, 0px); -webkit-transform: translate3d(-960px, 0px, 0px); transition-duration: 0s; -webkit-transition-duration: 0s;">

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible swiper-slide-active" data-src="/images/portfolio/iimjobs/300.png" data-head="iimjobs" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/iimjobs/526.png" alt="iimjobs">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/redquanta/300.png" data-head="RedQuanta" style="width: 240px; height: 255px;">
					<div class="image-container image-container--border">
						<img src="/images/portfolio/redquanta/526.png" alt="RedQuanta">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/belita/300.png" data-head="Belita" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/belita/526.png" alt="Belita">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/shephertz/300.png" data-head="Shephertz" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/shephertz/526.png" alt="Shephertz">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/engrave/300.png" data-head="Engrave" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/engrave/526.png" alt="Engrave">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/mapmytalent/300.png" data-head="mapmytalent" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/mapmytalent/526.png" alt="mapmytalent">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/dogspot/300.png" data-head="dogspot" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/dogspot/526.png" alt="dogspot">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/grabhouse/300.png" data-head="grabhouse" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/grabhouse/526.png" alt="grabhouse">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/prettysecrets/300.png" data-head="PrettySecrets" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/prettysecrets/526.png" alt="PrettySecrets">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/91mobiles/300.png" data-head="91mobiles" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/91mobiles/526.png" alt="91mobiles">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/fabbag/300.png" data-head="FabBag" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/fabbag/526.png" alt="FabBag">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/frsh/300.png" data-head="frsh" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/frsh/526.png" alt="frsh">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/roposo/300.png" data-head="Roposo" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/roposo/526.png" alt="Roposo">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/purplesquirrel/300.png" data-head="PurpleSquirrel" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/purplesquirrel/526.png" alt="PurpleSquirrel">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/nearify/300.png" data-head="nearify" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/nearify/526.png" alt="nearify">
					</div>
				</a>

				<!--Slide-->
				<a href="#" class="swiper-slide swiper-slide-visible" data-src="/images/portfolio/teewe/300.png" data-head="teewe" style="width: 240px; height: 255px;"> 
					<div class="image-container image-container--border">
						<img src="/images/portfolio/teewe/526.png" alt="teewe">
					</div>
				</a>
			</div><!--end swiper wrapper-->
		</div><!--end swiper container-->
	</div><!--end swiper container-->

	<div class="leftside-arrow">
		<i class="fa fa-angle-left"></i>
		<div class="slide-preview">
			<img class="img-arrow img-prev" src="/images/portfolio/teewe/300.png" alt="Teewe">
			<span class="arrow-heading">Teewe</span>
		</div>
	</div>
	<div class="rightside-arrow">
		<i class="fa fa-angle-right"></i>
		<div class="slide-preview">
			<img class="img-arrow img-next" src="/images/portfolio/iimjobs/300.png" alt="iimjobs">
			<span class="arrow-heading">iimjobs</span>
		</div>
	</div>
	<!--end swiper controls-->
</div>

<section class="container">
	<h3 class="not-visible">Helper</h3>

	<div class="slider-information">
		<div class="slider-information__item slider-information__item--first iimjobs">
			<p class="slider-information__text">Really very nice design and supportive online quick response. Awesome work!!! </p>
			<p class="slider-information__author">Catherine Welch</p>
		</div>

		<div class="slider-information__item redquanta">
			<p class="slider-information__text"> Very well documented. Great Work! </p>
			<p class="slider-information__author">Neal Caffrey</p>
		</div>

		<div class="slider-information__item appcorner">
			<p class="slider-information__text">Unique design, great functionality, modern style. Nice!  </p>
			<p class="slider-information__author">Sara Ellis</p>
		</div>

		<div class="slider-information__item бандлер">
			<p class="slider-information__text"> Awesome template! Thank You for great job!!! </p>
			<p class="slider-information__author">Elizabeth Burke</p>
		</div>
	</div>

	<div class="devider-brand devider--top-large"></div>
</section>
@endsection

@section('scripts')
<script>
	$(document).ready(function() {
		sliderSidesAdvanced();
	});
</script>
@endsection