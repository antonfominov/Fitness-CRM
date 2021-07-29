package react.fitness.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Parent;

@Entity
@Table(name = "clubs")
public class Club {

    public Club() {
    }

    @Id
    @Column(name = "id")

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "adress")
    private String adress;

    @Column(name = "openTime")
    private String openTime;

    @Column(name = "closeTime")
    private String closeTime;

    @Column(name = "parentName")
    private String parentName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="city")
    private City city;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAdress() {
        return adress;
    }

    public String getOpenTime() {
        return openTime;
    }

    public String getCloseTime() {
        return closeTime;
    }

    public String getParentName() {
        return parentName;
    }

    @JsonIgnore
    public City getCity() {
        return city;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public void setOpenTime(String openTime) {
        this.openTime = openTime;
    }

    public void setCloseTime(String closeTime) {
        this.closeTime = closeTime;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }
}
