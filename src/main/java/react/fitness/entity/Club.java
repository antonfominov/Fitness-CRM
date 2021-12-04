package react.fitness.entity;

import javax.persistence.*;

@Entity
@Table(name = "clubs")
public class Club {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "adress")
    private String adress;

    @Column(name = "openTime")
    private String openTime;

    @Column(name = "closeTime")
    private String closeTime;

    @Column(name = "cityId")
    private Long cityId;

    @Column(name = "cityName")
    private String cityName;

    public Long getId() {
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

    public Long getCityId() {
        return cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setId(Long id) {
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

    public void setCityId(Long cityId) {
        this.cityId = cityId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}
