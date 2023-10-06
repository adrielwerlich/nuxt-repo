<template>
  <div>
    <!-- .header-hero-unit -->
    <div class="header-hero-unit home-hero-unit">
      <div class="dark-filter">
        <navigation-bar-content-view v-bind:isTextWhite="true" />
        <div class="container text-center" id="header-text">
          <p>
            Zen<br />
            Estudo exploratório de uso de Nuxt<br />
            It's free.
          </p>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <a
              href="https://vercel.com/templates/nuxt"
              class="button-white"
              id="header-button-agent"
              >Templates to use with nuxt</a
            >
            <a
              href="https://github.com/fayazara/onelink"
              class="button-white"
              id="header-button-agent"
              >Repo of cool reactive app with nuxt</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- .header-hero-unit -->
    <!-- .description -->
    <div class="description">
      <div class="container text-center">
        <div class="row">
          <h2>How does ZenEstate work?</h2>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="circled-number">1</div>
            <h4>Describe your needs</h4>
            <p>
              Select your filters (type, price, location, timeline) for the
              property you are planning to buy, sell, rent or rent out.
            </p>
          </div>
          <div class="col-sm-4">
            <div class="circled-number">2</div>
            <h4>Search agents</h4>
            <p>
              We will show you a list of licensed real estate agents whose
              experience best matches your needs.
            </p>
          </div>
          <div class="col-sm-4">
            <div class="circled-number">3</div>
            <h4>Contact agents</h4>
            <p>
              You can contact your favorite agents and ask for their services.
              We do not take any commission or hidden fee.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- .description -->
    <!-- .subscribe -->
    <div class="subscribe">
      <div class="subscribe-group">
        <div class="container">
          <div class="row">
            <div v-if="!hasInvited" class="col-sm-6 col-md-4 col-md-offset-1">
              <div class="row">
                <div class="col-xs-12">
                  <h3>Do you know any great real estate agent?</h3>
                  <p>
                    ZenEstate is a free project and you can help other members
                    of ZenEstate community find a great real estate agent. Do
                    you know any great real estate agent? Invite them!
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your name"
                    name="sender-name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Agent's email address"
                    name="agent-email-address"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 form-group text-center">
                  <button type="submit" class="btn btn-default">Invite</button>
                </div>
              </div>
            </div>
            <div v-else class="col-sm-6 col-md-4 col-md-offset-1">
              <div class="row">
                <div class="col-xs-12">
                  <h3>Thank you for inviting a real estate agent!</h3>
                  <p>An invitation email has been sent to</p>
                </div>
              </div>
            </div>
            <div id="subscribe-form" class="col-sm-6 col-md-4 col-md-offset-2">
              <div class="row">
                <div class="col-xs-12">
                  <h3>Subscribe to get updates</h3>
                </div>
              </div>
              <div id="subscriber-form">
                <div class="row">
                  <div class="col-xs-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      name="first-name"
                    />
                  </div>
                  <div class="col-xs-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      name="last-name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                      name="email-address"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-xs-6">
                      <label class="radio-inline">
                        <input
                          type="radio"
                          name="type"
                          id="agent-type"
                          value="agent"
                        />Property agent
                      </label>
                    </div>
                    <div class="col-xs-6">
                      <label class="radio-inline">
                        <input
                          type="radio"
                          name="type"
                          id="owner-seeker-type"
                          value="owner-seeker"
                        />Property owner/seeker
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 form-group text-center">
                    <button type="submit" class="btn btn-default">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="subscribe-thank-you"
              class="col-sm-6 col-md-4 col-md-offset-2"
            >
              <div class="row">
                <div class="col-xs-12">
                  <h3>Thank you for subscribing!</h3>
                  <p>You will now receive our updates!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
