@extends('master')

@section('title')
India Quotient : Who Are We?
@endsection

@section('content')

@include('partials.header-sub')

<section class="container">
	<div class="row">
		<div class="about">
			<div class="col-sm-6">
				<h2 class="heading-cascade heading-cascade--danger"><span class="heading-cascade__step">who</span> are we?</h2>
				<p class="p-space text-brand">We know a bit about VC funds - raised money, managed and even invested in them. We are a bunch of people who travel, meet, talk to and invest in <strong>ginger startups</strong> (startups that grow in every direction), at early stage.</p>
				<p class="p-space">We have started companies earlier, and man, that was even tougher than being an investor. We are usually scared of tough questions by our portfolio founders. So we try our best to be the audience of all these startups. For example, we gained a lot of weight when we invested in food. And when we sleep on our desks, we imagine how the world will be different. One of our partners dreamt that 'Siri' is taking requests for buying the Xiaomi phone automatically and even arranging a loan for it.</p>
				<p class="p-space">To show we are serious about our work, we have a Board, an Investment Committee, Mentors, and Investment Managers. The founders of our portfolio companies also are a part of the IQ team (actually those are the most useful guys).</p>
				<p class="p-space">Our current portfolio of disrupters (<em>yeah, cliché!</em>) is listed below. In a few decades, we will update the list categorising the successful ones.</p>
				</p>
			</div><!-- end col -->

			<div class="col-sm-6">
				<blockquote class="blockquote blockquote--empty blockquote--strong">
					<span class="blockquote__line">It is not the strongest of the species that survive,<br><strong>nor the most intelligent,</strong></span><span class="blockquote__line"> but the one most <br><strong>responsive to change.</strong></span>
					<div class="clearfix"></div>
					<div class="blockquote__devider">
						<small class="blockquote__author">Charles Darwin</small>
					</div>
				</blockquote>
			</div><!-- end col -->
		</div><!-- end about -->
	</div><!-- end row -->
</section><!-- end container -->
@endsection