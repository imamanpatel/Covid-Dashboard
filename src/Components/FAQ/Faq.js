import React, { Component } from "react";
import Nav from "../Navbar/Navbar";
import "./Faq.css";
class Faq extends Component{
    render(){
        return (
              <div className="faq-container">
                <div>
                  <center>
                    <span className="Covid-heading">COVID-19/CORONAVIRUS</span>
                    <br />
                  </center>
                </div>
                <br />
                <div>
                  <h2 className="faqquestion">FREQUENTLY ASKED QUESTIONS : </h2>
                </div>
                <br />
                <br />
                <ol>
                  <li>
                    <div>
                      <h3 className="questions">What is a coronavirus?</h3>
                      <p>
                        Coronaviruses are a large family of viruses which may cause
                        illness in animals or humans. In humans, several coronaviruses
                        are known to cause respiratory infections ranging from the
                        common cold to more severe diseases such as Middle East
                        Respiratory Syndrome (MERS) and Severe Acute Respiratory
                        Syndrome (SARS). The most recently discovered coronavirus causes
                        coronavirus disease COVID-19.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">What is COVID-19?</h3>
                      <p>
                        COVID-19 is the infectious disease caused by the most recently
                        discovered coronavirus. This new virus and disease were unknown
                        before the outbreak began in Wuhan, China, in December 2019.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">What are the symptoms of COVID-19?</h3>
                    
                      <p>
                        The most common symptoms of COVID-19 are fever, tiredness, and
                        dry cough. Some patients may have aches and pains, nasal
                        congestion, runny nose, sore throat or diarrhea. These symptoms
                        are usually mild and begin gradually. Some people become
                        infected but don’t develop any symptoms and don't feel unwell.
                        Most people (about 80%) recover from the disease without needing
                        special treatment. Around 1 out of every 6 people who gets
                        COVID-19 becomes seriously ill and develops difficulty
                        breathing. Older people, and those with underlying medical
                        problems like high blood pressure, heart problems or diabetes,
                        are more likely to develop serious illness. People with fever,
                        cough and difficulty breathing should seek medical attention.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">How does COVID-19 spread?</h3>
                      <br />
                      <p>
                        People can catch COVID-19 from others who have the virus. The
                        disease can spread from person to person through small droplets
                        from the nose or mouth which are spread when a person with
                        COVID-19 coughs or exhales. These droplets land on objects and
                        surfaces around the person. Other people then catch COVID-19 by
                        touching these objects or surfaces, then touching their eyes,
                        nose or mouth. People can also catch COVID19 if they breathe in
                        droplets from a person with COVID-19 who coughs out or exhales
                        droplets. This is why it is important to stay more than one
                        meter away from a person who is sick.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Can the virus that causes COVID-19 be transmitted through the
                        air?
                      </h3>
                      <br />
                      <p>
                        Studies to date suggest that the virus that causes COVID-19 is
                        mainly transmitted through contact with respiratory droplets
                        rather than through the air.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Can CoVID-19 be caught from a person who has no symptoms?
                      </h3>
                      <br />
                      <p>
                        The main way the disease spreads is through respiratory droplets
                        expelled by someone who is coughing. The risk of catching
                        COVID-19 from someone with no symptoms at all is very low.
                        However, many people with COVID-19 experience only mild
                        symptoms. This is particularly true at the early stages of the
                        disease. It is therefore possible to catch COVID-19 from someone
                        who has, for example, just a mild cough and does not feel ill.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Can I catch COVID-19 from the faeces of someone with the
                        disease?
                      </h3>
                      <br />
                      <p>
                        The risk of catching COVID-19 from the faeces of an infected
                        person appears to be low. While initial investigations suggest
                        the virus may be present in faeces in some cases, spread through
                        this route is not a main feature of the outbreak. Because this
                        is a risk, however, it is another reason to clean hands
                        regularly, after using the bathroom and before eating
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        What can I do to protect myself and prevent the spread of
                        disease?
                      </h3>
                      <br />
                      <h4 style={{ textDecoration: "underline" }}>
                        Protection measures for everyone
                      </h4>
                      <br />
                      <p>
                        Stay aware of the latest information on the COVID-19 outbreak,
                        available on the websites and social media of the national
                        Department of Health
                        <span>
                          <a href="www.health.gov.za">(www.health.gov.za)</a>
                        </span>
                        , National Institute for Communicable Diseases
                        <span>
                          <a href="www.nicd.ac.za">(www.nicd.ac.za)</a>
                        </span>{" "}
                        and World Health Organization
                        <span>
                          <a href="www.who.int">(www.who.int)</a>
                        </span>
                        .
                      </p>
                      <ol type="i">
                        <li>
                          Regularly and thoroughly wash your hands with soap and water
                          or clean your hands with an alcoholbased hand sanitiser. Why?
                          Washing your hands with soap and water or using alcohol-based
                          hand sanitiser kills viruses that may be on your hands.
                        </li>
                        <br />
                        <li>
                          Maintain at least one meter distance between yourself and
                          anyone who is coughing or sneezing. Why? When someone coughs
                          or sneezes they spray small liquid droplets from their nose or
                          mouth which may contain a virus. If you are too close, you can
                          breathe in the droplets, including the COVID-19 virus if the
                          person coughing has the disease.
                        </li>
                        <br />
                        <li>
                          Avoid touching eyes, nose and mouth. Why? Hands touch many
                          surfaces and can pick up viruses. Once contaminated, hands can
                          transfer the virus to your eyes, nose or mouth. From there,
                          the virus can enter your body and can make you sick.
                        </li>
                        <br />
                        <li>
                          Make sure you, and the people around you, follow good
                          respiratory hygiene. This means covering your mouth and nose
                          with your bent elbow or tissue when you cough or sneeze. Then
                          dispose of the used tissue immediately. Why? Droplets spread
                          viruses. By following good respiratory hygiene you protect the
                          people around you from viruses such as cold, flu and COVID-19.
                        </li>
                        <br />
                        <li>
                          Stay home if you feel unwell. If you have a fever, cough and
                          difficulty breathing, seek medical attention and call in
                          advance. Follow the directions of your local health facility.
                          Why? The national and provincial Departments of Health will
                          have the most up to date information on the situation in your
                          area. Calling in advance will allow your healthcare provider
                          to quickly direct you to the right health facility. This will
                          also protect you and help prevent spread of viruses and other
                          infections.
                        </li>
                        <br />
                        <li>
                          Stay informed on the latest developments about COVID-19.
                          Follow advice given by your healthcare provider and the
                          national Department of Health on how to protect yourself and
                          others from COVID-19. Why? National and local authorities will
                          have the most up to date information on whether COVID-19 is
                          spreading in your area. They are best placed to advise on what
                          people in your area should be doing to protect themselves
                        </li>
                      </ol>
                      <br />
                      <span>
                        <h4 style={{ textDecoration: "underline" }}>
                          Protection measures for persons who are in or have recently
                          visited (past 14 days) areas where COVID19 is spreading
                        </h4>
                        <br />
                        <ol type="i">
                          <li>
                            Stay at home if you begin to feel unwell, even with mild
                            symptoms such as headache and slight runny nose, until you
                            recover. Why? Avoiding contact with others and visits to
                            medical facilities will allow these facilities to operate
                            more effectively and help protect you and others from
                            possible COVID-19 and other viruses.
                          </li>
                          <li>
                            If you develop fever, cough and difficulty breathing, seek
                            medical advice promptly as this may be due to a respiratory
                            infection or other serious condition. Call in advance and
                            tell your provider of any recent travel or contact with
                            travellers. Why? Calling in advance will allow your
                            healthcare provider to quickly direct you to the right
                            health facility. This will also help to prevent possible
                            spread of COVID-19 and other viruses.
                          </li>
                        </ol>
                      </span>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">How likely am I to catch COVID-19?</h3>
                      <br />
                      <p>
                        The risk depends on where you live or where you have travelled
                        recently. The risk of infection is higher in areas where a
                        number people have been diagnosed with COVID-19. More than 95
                        per cent of all COVID-19 cases are occurring in China, with the
                        majority of those in Hubei Province. The risk in South Africa is
                        currently low, however, it important to be aware of the
                        situation and preparedness efforts in your area
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">Should I worry about COVID-19?</h3>
                      <br />
                      <p>
                        If you are not in an area where COVID-19 is spreading, or if you
                        have not travelled from one of those areas or have not been in
                        close contact with someone who has and is feeling unwell, your
                        chances of getting it are currently low. However, it is
                        understandable that you may feel stressed and anxious about the
                        situation. It is a good idea to get the facts to help you
                        accurately determine your risks so that you can take reasonable
                        precautions. Your healthcare provider, the National Department
                        of Health and the National Institute for Communicable Diseases
                        (NICD) are all sources of accurate information on COVID-19. It
                        is important to be informed of the situation where you live and
                        take appropriate measures to protect yourself. If there is an
                        outbreak of COVID-19 in South Africa and you are in an area
                        where there are cases of COVID-19 you need to take the risk of
                        infection seriously. Follow the advice issued by national and
                        local Departments of Health. Although for most people COVID-19
                        causes only mild illness, it can make some people very ill. More
                        rarely, the disease can be fatal. Older people, and those with
                        pre-existing medical conditions (such as high blood pressure,
                        heart problems or diabetes) appear to be more vulnerable.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Who is at risk of developing severe illness?{" "}
                      </h3>
                      <br />
                      <p>
                        While we are still learning about how COVID-2019 affects people,
                        older persons and persons with pre-existing medical conditions
                        (such as high blood pressure, heart disease, or diabetes) appear
                        to develop serious illness more often than others.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Are antibiotics effective in preventing or treating the
                        COVID-19?
                      </h3>
                      <br />
                      <p>
                        No. Antibiotics do not work against viruses, they only work on
                        bacterial infections. COVID-19 is caused by a virus, so
                        antibiotics do not work. Antibiotics should not be used as a
                        means of prevention or treatment of COVID19. They should only be
                        used as directed by a physician to treat a bacterial infection.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Are antibiotics effective in preventing or treating the
                        COVID-19?
                      </h3>
                      <br />
                      <p>
                        No. Antibiotics do not work against viruses, they only work on
                        bacterial infections. COVID-19 is caused by a virus, so
                        antibiotics do not work. Antibiotics should not be used as a
                        means of prevention or treatment of COVID19. They should only be
                        used as directed by a physician to treat a bacterial infection.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Is there a vaccine, drug or treatment for COVID-19?
                      </h3>
                      <br />
                      <p>
                        Not yet. To date, there is no vaccine and no specific antiviral
                        medicine to prevent or treat COVID-2019. However, those affected
                        should receive care to relieve symptoms. People with serious
                        illness should be hospitalised. Most patients recover thanks to
                        supportive care.
                      </p>
                      <br />
                      <p>
                        Possible vaccines and some specific drug treatments are under
                        investigation. They are being tested through clinical trials.
                        The World Health Organization (WHO) is coordinating efforts to
                        develop vaccines and medicines to prevent and treat COVID-19.
                      </p>
                      <br />
                      <p>
                        The most effective ways to protect yourself and others against
                        COVID-19 are to frequently clean your hands, cover your cough
                        with the bend of elbow or tissue, and maintain a distance of at
                        least one meter from people who are coughing or sneezing.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Should I wear a mask to protect myself?
                      </h3>
                      <br />
                      <p>
                        People with no respiratory symptoms, such as cough, do not need
                        to wear a mask. The WHO recommends the use of masks for people
                        who have symptoms of COVID-19 and for those caring for
                        individuals who have symptoms, such as cough and fever. The use
                        of masks is crucial for health workers and people who are taking
                        care of someone (at home or in a healthcare facility).
                      </p>
                      <br />
                      <p>
                        The most effective ways to protect yourself and others against
                        COVID-19 are to frequently clean your hands, cover your cough
                        with the bend of elbow or tissue and maintain a distance of at
                        least one meter from people who are coughing or sneezing.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        How long is the incubation period for COVID-19?
                      </h3>
                      <br />
                      <p>
                        The “incubation period” means the time between catching the
                        virus and beginning to have symptoms of the disease. Most
                        estimates of the incubation period for COVID-19 range from 1-14
                        days, most commonly around five days.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        How long does the virus survive on surfaces?
                      </h3>
                      <br />
                      <p>
                        It is not certain how long the virus that causes COVID-19
                        survives on surfaces, but it seems to behave like other
                        coronaviruses. Studies suggest that coronaviruses (including
                        preliminary information on the COVID-19 virus) may persist on
                        surfaces for a few hours or up to several days. This may vary
                        under different conditions (e.g. type of surface, temperature or
                        humidity of the environment)
                      </p>
                      <br />
                      <p>
                        If you think a surface may be infected, clean it with simple
                        disinfectant to kill the virus and protect yourself and others.
                        Wash your hands with soap and water or an alcohol-based hand
                        sanitiser. Avoid touching your eyes, mouth, or nose.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">
                        Is it safe to receive a package from any area where COVID-19 has
                        been reported?
                      </h3>
                      <br />
                      <p>
                        Yes. The likelihood of an infected person contaminating
                        commercial goods is low and the risk of catching the virus that
                        causes COVID-19 from a package that has been moved, travelled,
                        and exposed to different conditions and temperature is also low.
                      </p>
                    </div>
                  </li>
                  <br />
                  <li>
                    <div>
                      <h3 className="questions">Is there anything I should not do? </h3>
                      <br />
                      <p>
                        The following measures ARE NOT effective against COVID-2019 and
                        can be harmful:
                      </p>
                      <ol type="i">
                        <li>smoking </li>
                        <li>taking traditional herbal remedies</li>
                        <li>wearing multiple masks </li>
                        <li>taking self-medication such as antibiotics </li>
                      </ol>
                    </div>
                  </li>
                  <br />
        
                  <div>
                    <p>
                      In any case, if you have fever, cough and difficulty breathing
                      seek medical care early to reduce the risk of developing a more
                      severe infection and be sure to share your recent travel history
                      with your healthcare provider.
                    </p>
                  </div>
        
                  <br />
                </ol>
                <center className="tollnumber">
                  <h3>COVID-19 Hotline Number: 0800 029 999</h3>
                </center>
                <br />
              </div>
          );
}
}

export default Faq;