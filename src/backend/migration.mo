import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";

module {
  type OldContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    agencyName : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type OldActor = {
    submissions : Map.Map<Nat, OldContactSubmission>;
    adminPrincipal : Principal;
    nextSubmissionId : Nat;
  };

  type NewActor = {
    contactFormSubmissions : [OldContactSubmission];
  };

  public func run(old : OldActor) : NewActor {
    let submissionsArray = old.submissions.toArray().map(func((_, submission)) { submission });
    { contactFormSubmissions = submissionsArray };
  };
};
