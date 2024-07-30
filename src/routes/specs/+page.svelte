<main>
<p>Villagers can create an ACCOUNT but they must be approved prior to interacting with the site.</p>
<p>There are two types of ACCOUNTs:</p>
<ul>
  <li>Standard</li>
  <li>VIP</li>
</ul>
<p>VIPs can choose to turn off ads.</p>
<p>An EVENT has a cost associated with it, either:</p>
<ul>
  <li>Free</li>
  <li>Donation requested (with suggested amount) (no cost associated)</li>
  <li>Specified amount (with ability to increase as a donation)</li>
</ul>
<p>Money collected for the EVENT will be held until 2 business days after the EVENT is successfully held.</p>
<p>Refunds are issued only if the EVENT is cancelled.</p>
<p>An EVENT can have one of the following registration limits:</p>
<ul>
  <li>Unlimited</li>
  <li>Specified number</li>
</ul>
<p>An EVENT is associated with one or more CATEGORIES:</p>
<ul>
  <li>Dining</li>
  <li>Excursion</li>
  <li>Party</li>
  <li>Get-Together</li>
</ul>
<p>A MEMBER can register up to 2 MEMBERs for an EVENT.</p>
<p>If the specified number for an EVENT registration limit is reached, the EVENT can be seen, but cannot be registered for.</p>
<p>If the specified number for an EVENT registration limit is reached and the EVENT allows it, the MEMBER wishing to register is placed on a wait list, in case more spots become available.</p>
<p>If the EVENT allows it, a MEMBER can place themselves on a future interest list to be notified if this event is repeated in the future.</p>
<p>An EVENT with a non-zero cost will have a processing fee added to the cost.</p>
<p>To register for a non-zero cost EVENT, the member must pay immediately by credit card.</p>
<p>A MEMBER can choose to have their credit card info remembered.</p>
<p>A paid EVENT REGISTRATION cannot be canceled although it can be transferred to another MEMBER.</p>
<p>EVENTS with VIP ACCESS can only be registered for by VIP MEMBERs although anyone can see the EVENT.</p>
<p>An EVENT has a RELEASE DATE, meaning the date it becomes visible on the site. VIP MEMBERs have early access to register for EVENTs.</p>
<p>An EVENT has a CUTOFF DATE, meaning the last date for which an EVENT can be registered. If none is specified by the EVENT CREATOR, the CUTOFF DATE is one day prior to the EVENT date.</p>
<p>A MEMBER can request permission to be a CREATOR but must be approved prior to creating any EVENTs.</p>
<p>CREATORs can create EVENTs.</p>
<p>MEMBERs can register for EVENTs.</p>
<p>All CREATORs are MEMBERs but not all MEMBERs are CREATORs</p>
<ul>
  <li>Member</li>
  <li>Applied for creatorship</li>
  <li>Approved for creatorship</li>
  <li>Denied creatorship</li>
  <li>Revoked creatorship</li>
  <li>Revoked membership</li>
</ul>
<p>A MEMBER who wishes to also be a CREATOR must first apply and be approved before they can create EVENTs</p>
<p>EVENTs have the following ACCESS types:</p>
<ul>
  <li>Public: Anyone can register</li>
  <li>Invite Only: Only specifically invited MEMBERS can register (although invited MEMBERs who register can extend an EVENT INVITE to others). Such EVENTs can be accessed only by entering a code unique to that event.</li>
  <li>VIP: Only SUPER ADMIN can create VIP EVENTs.</li>
</ul>
<p>An EVENT can be searched for by:</p>
<ul>
  <li>Category</li>
  <li>Date</li>
  <li>Creator</li>
  <li>Name</li>
  <li>VIP Only</li>
  </ul>
<p>An EVENT has the following properties:</p>
<ul>
  <li>id</li>
  <li>name</li>
  <li>description</li>
  <li>host_id</li>
  <li>host_name</li>
  <li>location</li>
  <li>datetime</li>
  <li>cost</li>
  <li>access</li>
  <li>release_date</li>
  <li>cutoff_date</li>
  <li>cancelled?</li>
  <li>waitlist?</li>
  <li>future_interest??</li>
  <li>registration_limit</li>
  <li>categories[]</li>
</ul>
<p>A MEMBER has the following properties:</p>
<ul>
  <li class="mandatory">id</li>
  <li class="mandatory">first_name</li>
  <li class="mandatory">last_name</li>
  <li class="mandatory">email</li>
  <li class="mandatory">phone</li>
  <li class="mandatory">password</li>
  <li class="mandatory">password_hint</li>
  <li>village</li>
  <li>status</li>
  <li>remember_credit_card</li>
</ul>
<p>A MEMBER can create a GROUP.</p>
<p>GROUPs have the following access:</p>
<ul>
  <li>Public</li>
  <li>Invite Only</li>
</ul>
<p>GROUPs can be invited to EVENTs.</p>
<p>A new access for EVENTs will be added: Group(s) that will restrict access to members of specified GROUPs.</p>
<p>Invitations will be handled through text messaging via Twillio.</p>
</main>



<style>
  main {
    margin-left: 2rem;
    margin-top: 2rem;
    line-height: 1.75;
    column-count: 2;
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }

  .mandatory {
    font-weight: bold;
  }
</style>