@extends('master')

@section('title')
India Quotient : Who Are We?
@endsection

@section('content')

@include('partials.header-sub')

<section class="container bottom-space--m">
	<div class="row">
		<div class="col-sm-6">
			<h2 class="heading-cascade heading-cascade--danger"><span class="heading-cascade__step">who are</span>you?</h2>
			<p class="p-space text-brand">Chances are high that you're someone who cannot take mediocrity any more. You loved your job (great coffee, free internet) but broke out of that routine. You're hungry and hustling.</p>
			<p class="p-space">It will help if you describe yourself to us in a word or two - examples, hacker and blogger, designer mom of two, consultant turned cook, musician turned data analyst, doctor turned banker, etc. We ideally want you to be all of these.</p>
			<p class="p-space">After Googling our brains out, we have found that the following criteria define a good entrepreneur. It's amazing how much our own views match! Many thanks to all those great VC blogs. So either you have all of the below, or just the last one.</p>
			<ul class="list list--arrow">
				<li><strong>Hunger</strong> - Underdogs, like struggle</li>
				<li><strong>Hustle</strong> - Take very quick decisions using subconscious</li>
				<li>Have only one focus in life</li>
				<li>Build companies to last, don't like to talk exit</li>
				<li>Very frugal, lifestyle already sacrificed</li>
				<li>Love breaking the norms</li>
			</ul>
		</div><!-- end col -->

		<div class="col-sm-6">
			<blockquote class="blockquote blockquote--empty blockquote--strong">
				<span class="blockquote__line">Be <br><strong>humble,</strong></span><span class="blockquote__line"> but <br><strong>have balls.</strong></span>
				<div class="clearfix"></div>
				<div class="blockquote__devider">
					<small class="blockquote__author">Tine Thygesen</small>
				</div>
			</blockquote>
		</div><!-- end col -->
	</div><!-- end row -->

	<div class="row">
		<div class="col-sm-6">
			<h2 class="heading-cascade heading-cascade--danger"><span class="heading-cascade__step">what are</span>you building?</h2>
			<p class="p-space text-brand">We have sleepless nights after we say 'sorry' to an entrepreneur :(. So please make sure that your company is disrupting something, shaking things, offending a lot of people. If you want some clues, leverage from the list here:</p>
			<ul class="list list--arrow">
				<li>You think the current social networks will fade away, like their predecessors, and you want to build the next one. From India. For the world.</li>
				<li>You were denied a loan by a bank and you want to raze down all those big buildings and shrink them to an app.</li>
				<li>You want to eliminate exams entirely, and want to do the assessments by monitoring the pulse rate of the students during the class.</li>
				<li>You don't like the current music apps, and you think your taste of music should play on its own for you.</li>
				<li>You want to make consumer hardware in India, though your batchmates think you are nuts to stay back here.</li>
			</ul>
		</div><!-- end col -->

		<div class="col-sm-6">
			<blockquote class="blockquote blockquote--empty blockquote--strong">
				<span class="blockquote__line">Lots of companies <br><strong>don't succeed over time.</strong></span><span class="blockquote__line">What do they do wrong? <br><strong>They usually miss the future.</strong></span>
				<div class="clearfix"></div>
				<div class="blockquote__devider">
					<small class="blockquote__author">Larry Page</small>
				</div>
			</blockquote>
		</div><!-- end col -->
	</div><!-- end row -->
</section><!-- end container -->
@endsection