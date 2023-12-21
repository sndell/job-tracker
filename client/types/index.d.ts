type User = {
  username: string;
  email: string;
  isVerified: boolean;
};

type Job = {
  status: JobStatus;
  id: string;
  contactPhone?: string | null;
  contactPerson?: string | null;
  contactLinkedIn?: string | null;
  contactEmail?: string | null;
  companyWebsite?: string | null;
  companyName?: string | null;
  interactions?: Array<{
    way: string;
    time: any;
    summary?: string | null;
    id: number;
  }> | null;
};

type Interaction = {
  id: string;
  way?: string | null;
  summary?: string | null;
  time: DateTime;
};
